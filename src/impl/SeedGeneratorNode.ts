import { ISeedGenerator } from "../api/SeedGenerator";
import * as crypto from "crypto";


export class SeedGeneratorNode implements ISeedGenerator {
    private validChars: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ9';
    public generateSeed(): Promise<string> {
        return new Promise<string>((resolve ,reject)=>{
            crypto.randomBytes(300,(err,buf)=>{
                resolve(this.whiten(buf.toString('base64').toUpperCase()));
            });
        });
    }
    private whiten(hex: string): string {
        return hex.replace(/[^A-Z9]/g, '').substring(0,81);
    }
}