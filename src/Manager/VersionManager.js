//版本管理
export class VersionManager {
    constructor() { }
    static set Version(version) {
        this._version = version;
    }
    static get Version() {
        return this._version;
    }
}
