import ServiceBase from 'ServiceBase'

class Service extends ServiceBase {
    constructor() {
        super()
        this.$$prefix = ''
        this.$$path = {
            wechatSignUp: '/index/wechatSignUp',
            wechatSignIn: '/index/wechatSignIn',
            decryptData: '/index/decryptData',
            signIn: '/index/signIn',
            signOut: '/index/signOut',
            data: '/data/data.html',
            detail: '/index/detail',
            add: '/index/add',
            del: '/index/del',
            update: '/index/update'
        }
    }

    wechatSignUp(params) {
        return this.postRequest(this.$$path.wechatSignUp, params)
    }

    wechatSignIn(params) {
        return this.postRequest(this.$$path.wechatSignIn, params)
    }

    wechatDecryptData(params) {
        return this.postRequest(this.$$path.decryptData, params)
    }


    signIn(params) {
        return this.postRequest(this.$$path.signIn, params)
    }

    signOut() {
        return this.postRequest(this.$$path.signOut)
    }

    //获取表格分页数据
    getData(params) {
        return this.getRequest(this.$$path.data, params)
    }

    //获取单条数据
    getDetail(params) {
        return this.getRequest(this.$$path.detail, params)
    }

    //新增数据
    addData(params) {
        return this.postRequest(this.$$path.add, params)
    }

    //删除数据
    delData(params) {
        return this.getRequest(this.$$path.del, params)
    }

    //更新数据
    updateData(params) {
        return this.getRequest(this.$$path.update, params)
    }

}

export default Service