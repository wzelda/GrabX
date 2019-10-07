import * as Manager from "../Manager/Manager";
import * as Config from "../Config/Config";
import * as Common from "../Common/Common";

export class RoleManager{
    static PLAYER = 'Player';
    static ENEMY = 'Enemy';
    //动画名
    static readonly ANIMATORS_MOVE = ['walk', 'run'];
    static readonly ANIMATORS_ATTACK = ['attack1', 'attack2'];
    static readonly ANIMATORS_PLAYER_SKILL = 'skill';
    static readonly ANIMATOR_DEAD = 'death';
    static readonly ANIMATOR_WIN = 'win';
    static readonly ANIMATOR_IDLE = 'FightIdle';
    static readonly ANIMATOR_PROVOC_ENEMY = 'appear';

    static Player:Manager.PlayerRole;

    private constructor(){}

    static get hasPlayer():boolean{
        if(this.Player){
            return true;
        }else{
            console.error('Create role first!');
            return false;
        }
    }

    static CreateRole(head:fgui.GLoader, headUrl:string, bodySlot:fgui.GObject, bodyPath:string, callback?:Function, thisArg?){
        if(!bodyPath || !head) return;

        this.Player = new Manager.PlayerRole(head, bodySlot);
        this.changeHead(headUrl);
        this.changeBody(bodyPath, callback, thisArg);
    }

    //换头
    static changeHead(url:string){
        if(!this.hasPlayer) return;

        this.Player.setHead(url);
    }

    //换装
    static changeBody(path:string, callback?:Function, thisArg?, ...data){
        if(!this.hasPlayer) return;
        if(!path) return;

        Manager.PoolManager.recover(Config.PoolItemKey.DressTemplate, this.Player.mFactory);
        this.Player.setBody(path, callback, thisArg, ...data);
    }

    static setState(aniName:string, role:Manager.RoleBase){
        switch (aniName) {
            case this.ANIMATOR_IDLE:
                role.State.changeState(Config.StateConfig.IDEL);
                break;

            case this.ANIMATOR_DEAD:
                role.State.changeState(Config.StateConfig.DEAD);
                break;
        }
    }
}