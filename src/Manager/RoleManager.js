import * as Manager from "../Manager/Manager";
import * as Config from "../Config/Config";
export class RoleManager {
    constructor() { }
    static get hasPlayer() {
        if (this.Player) {
            return true;
        }
        else {
            console.error('Create role first!');
            return false;
        }
    }
    static CreateRole(head, headUrl, bodySlot, bodyPath, callback, thisArg) {
        if (!bodyPath || !head)
            return;
        this.Player = new Manager.PlayerRole(head, bodySlot);
        this.changeHead(headUrl);
        this.changeBody(bodyPath, callback, thisArg);
    }
    //换头
    static changeHead(url) {
        if (!this.hasPlayer)
            return;
        this.Player.setHead(url);
    }
    //换装
    static changeBody(path, callback, thisArg, ...data) {
        if (!this.hasPlayer)
            return;
        if (!path)
            return;
        Manager.PoolManager.recover(Config.PoolItemKey.DressTemplate, this.Player.mFactory);
        this.Player.setBody(path, callback, thisArg, ...data);
    }
    static setState(aniName, role) {
        switch (aniName) {
            case this.ANIMATOR_IDLE:
                role.State = Manager.StateBase.IDEL;
                break;
            case this.ANIMATOR_DEAD:
                role.State = Manager.StateBase.DEAD;
                break;
        }
    }
}
RoleManager.PLAYER = 'Player';
RoleManager.ENEMY = 'Enemy';
//动画名
RoleManager.ANIMATORS_MOVE = ['walk', 'run'];
RoleManager.ANIMATORS_ATTACK = ['attack1', 'attack2'];
RoleManager.ANIMATORS_PLAYER_SKILL = 'skill';
RoleManager.ANIMATOR_DEAD = 'death';
RoleManager.ANIMATOR_WIN = 'win';
RoleManager.ANIMATOR_IDLE = 'FightIdle';
RoleManager.ANIMATOR_PROVOC_ENEMY = 'appear';
