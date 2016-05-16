var uuid = require('UUID');

namespace jcc.ng.card{
    export class Deck {
        private _cards: PokerCard[];
        private _deckCount = 1;

        constructor(deckCount:number = 1){
            this._deckCount = deckCount;
        }

        get cards(): PokerCard[] {
            if (!this._cards) {
                this._initCards();
            }

            return this._cards;
        }

        private _initCards() {
            this._cards = Deck.createCards(this._deckCount);
            Deck.shuffle(this._cards);
        }

        static createCards(deckCount: number = 1): PokerCard[] {
            deckCount = Math.max(1, deckCount);
            var cards: PokerCard[] = [],
                colors: PokerColor[] = [PokerColor.Heart, PokerColor.Spade, PokerColor.Diamond, PokerColor.Club];
            for (var deckIndex = 0; deckIndex < deckCount; deckIndex++) {
                colors.forEach(c => {
                    for (var index = 1; index < 14; index++) {
                        var card = new PokerCard(uuid.generate(), c, index);
                        cards.push(card);
                    }
                });

                cards.push(new PokerCard(uuid.generate(), PokerColor.LittleJoker));
                cards.push(new PokerCard(uuid.generate(), PokerColor.BigJoker));
            }

            return cards;
        }

        static shuffle(cards: PokerCard[]) {
            if (!cards) {
                return;
            }

            for (var index = 0, length = cards.length; index < length; index++) {
                var newPos = Math.floor(Math.random() * length);
                var elements = cards.splice(index, 1, cards[newPos]);
                cards.splice(newPos, 0, elements[0]);
            }
        }
    }

    export class PokerCard {

        private _id: string;
        private _color: PokerColor;
        private _points: number;

        constructor(id: string, color: PokerColor, points?: number) {
            this._color = color;
            this._points = points;
            this._id = id;
        }

        get id(): string {
            return this._id;
        }

        get color(): PokerColor {
            return this._color;
        }

        get points(): number {
            return this._points;
        }

        toString(): string {
            var color: string, points: string;
            switch (this.color) {
                case PokerColor.Heart:
                    color = 'Heart';
                    break;
                case PokerColor.Spade:
                    color = 'Spade';
                    break;
                case PokerColor.Club:
                    color = 'Club';
                    break;
                case PokerColor.Diamond:
                    color = 'Diamond';
                    break;
                case PokerColor.LittleJoker:
                    return 'Little Joker';
                case PokerColor.BigJoker:
                    return 'Big Joker';
                default:
                    throw "Invalid Card!";
            }

            if (this.points === 1) {
                points = 'A';
            } else if (this.points === 11) {
                points = 'J';
            } else if (this.points === 12) {
                points = 'Q';
            } else if (this.points === 13) {
                points = 'K';
            } else {
                points = this.points.toString();
            }

            return color + ' ' + points;
        }
    }

    export enum PokerColor {
        Heart,
        Spade,
        Club,
        Diamond,
        LittleJoker,
        BigJoker
    }
}