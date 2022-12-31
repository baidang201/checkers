import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgRejectGame } from "./types/checkers/checkers/tx";
import { MsgPlayMove } from "./types/checkers/checkers/tx";
import { MsgCreateGame } from "./types/checkers/checkers/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/alice.checkers.checkers.MsgRejectGame", MsgRejectGame],
    ["/alice.checkers.checkers.MsgPlayMove", MsgPlayMove],
    ["/alice.checkers.checkers.MsgCreateGame", MsgCreateGame],
    
];

export { msgTypes }