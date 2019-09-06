
//版本管理
export class VersionManager{
    private static _version:number;

    private constructor(){}

    static set Version(version:number){
        this._version = version;
    }

    static get Version(){
        return this._version;
    }
}