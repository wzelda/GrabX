let timerId = -1;
//计时器池
let timerPool = new Array();
let timerList = new Array();
export class Timer {
    constructor() {
        this.CurCd = 0;
        this.EndTime = 0;
        this.IsRun = false;
        this.IsStart = false;
        this.IsAlive = true;
        this.autoRemove = true;
    }
    Init(cd, startCallback, updateCallback, endCallback, target, thisArg, autoRemove, autoStart) {
        this.Id = timerId + 1;
        this.MaxCd = cd;
        this.CurCd = 0;
        this.OnStart = startCallback;
        this.OnUpdate = updateCallback;
        this.OnEnd = endCallback;
        this.Target = target;
        this.ThisArg = thisArg;
        this.EndTime = 0;
        this.IsRun = false;
        this.IsStart = false;
        this.IsAlive = true;
        //默认自动销毁
        this.autoRemove = autoRemove != null ? autoRemove : true;
        //默认自动开始
        if (autoStart != false) {
            this.Start();
        }
    }
    Update() {
        if (!this.IsAlive)
            return;
        let currtime = Date.now();
        if (currtime < this.EndTime) {
            this.CurCd = (this.EndTime - currtime) * 0.001;
            if (typeof (this.OnUpdate) == "function") {
                this.OnUpdate.call(this.ThisArg, this.CurCd, this.Target);
            }
            requestAnimationFrame(this.Update.bind(this));
        }
        else {
            this.IsRun = false;
            this.IsStart = false;
            if (typeof (this.OnEnd) == "function") {
                this.OnEnd.call(this.ThisArg, this.Target);
            }
            if (this.autoRemove) {
                this.Remove();
            }
        }
    }
    Start() {
        this.IsRun = true;
        if (!this.IsStart) {
            this.IsStart = true;
            this.StartTime = Date.now();
            //计时结束时间
            this.EndTime = this.StartTime + this.MaxCd * 1000;
            if (typeof (this.OnStart) == "function") {
                this.OnStart.call(this.ThisArg, this.Target);
            }
            this.Update();
        }
    }
    ResetCd(cd) {
        if (typeof (cd) != "number")
            return;
        this.MaxCd = cd;
        this.EndTime = Date.now() + this.MaxCd * 1000;
    }
    Remove() {
        // this.MaxCd = 0;
        // this.CurCd = 0;
        this.OnStart = null;
        this.OnUpdate = null;
        this.OnEnd = null;
        this.Target = null;
        this.ThisArg = null;
        // this.EndTime = 0;
        this.IsRun = false;
        this.IsStart = false;
        this.IsAlive = false;
        //移动到首位
        let index = timerPool.indexOf(this);
        if (index > 0) {
            timerPool.splice(index, 1);
            timerPool.unshift(this);
        }
    }
}
export class TimerManager {
    constructor() { }
    /**
     * @param  {} thisArg 执行域
     * @param  {number} cd
     * @param  {function} startCallback 开始回调
     * @param  {function} updateCallback 过程回调
     * @param  {function} endCallback 结束回调
     * @param  {} target 计时目标
     * @param  {boolean} autoRemove 是否自动刷新，默认自动
     * @param  {boolean} autoStart 是否自动开始，默认自动
     */
    static NewTimer(thisArg, cd, startCallback, updateCallback, endCallback, target, autoRemove, autoStart) {
        let t = timerPool[0];
        if (!t || t.IsAlive) {
            t = new Timer();
            timerList[t.Id] = t;
            timerPool.push(t);
        }
        t.Init(cd, startCallback, updateCallback, endCallback, target, thisArg, autoRemove);
        return t;
    }
    static RemoveTimer(thisArg) {
        if (!thisArg)
            return;
        timerPool.forEach(timer => {
            if (timer.ThisArg && timer.ThisArg.id == thisArg.id) {
                timer.Remove();
            }
        });
    }
    static RemoveAllTimer() {
        for (let i in timerList) {
            timerList[i].Remove();
        }
    }
    static Update() {
        for (let i in timerList) {
            if (timerList[i].IsAlive) {
                timerList[i].Update();
            }
        }
    }
    static ClearAllTimer() {
        for (let i in timerList) {
            timerList[i].Remove();
            delete timerList[i];
        }
    }
}
