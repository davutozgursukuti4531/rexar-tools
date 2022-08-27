import RexarTools from "rexar-tools";
import { NPMReturns } from "../typings/Types";



RexarTools.npm("turkce-sozluk-api").then((v: NPMReturns) => console.log(v))
