namespace jcc.game {
    
    
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