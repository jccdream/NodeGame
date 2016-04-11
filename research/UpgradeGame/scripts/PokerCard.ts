namespace jcc.game{
    export class PokerCard{
        private _id:string;
        private _type:PokerCardType;
        
        get name(): string{
            return PokerCardType[this._type];
        }
        
        get id(): string{
            return this._id;
        }
        set id(value: string){
            this._id = value;
        }
        
        get type():PokerCardType{
            return this._type;
        }
        
        get color(): PokerColor{
            
        }
        
        get points(): PokerPoints{
            
        }
    }
    
    export enum PokerColor{
        Heart,
        Spade,
        Club,
        Diamond,
        LittleJoker,
        BigJoker
    }
    
    export enum PokerPoints{
        A,
        Two,
        Three,
        Four,
        Five,
        Six,
        Seven,
        Eight,
        Nine,
        Ten,
        J,
        Q,
        K,
        LittleJoker,
        BigJoker
    }
    
    export enum PokerCardType{
        HeartA,
        Heart2,
        Heart3,
        Heart4,
        Heart5,
        Heart6,
        Heart7,
        Heart8,
        Heart9,
        Heart10,
        HeartJ,
        HeartQ,
        HeartK,
        SpadeA,
        Spade2,
        Spade3,
        Spade4,
        Spade5,
        Spade6,
        Spade7,
        Spade8,
        Spade9,
        Spade10,
        SpadeJ,
        SpadeQ,
        SpadeK,
        ClubA,
        Club2,
        Club3,
        Club4,
        Club5,
        Club6,
        Club7,
        Club8,
        Club9,
        Club10,
        ClubJ,
        ClubQ,
        ClubK,
        DiamondA,
        Diamond2,
        Diamond3,
        Diamond4,
        Diamond5,
        Diamond6,
        Diamond7,
        Diamond8,
        Diamond9,
        Diamond10,
        DiamondJ,
        DiamondQ,
        DiamondK,
        LittleJoker,
        BigJoker
    }
}