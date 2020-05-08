import axios from "axios"
import qs from "qs"
import store from "../store";

axios.defaults.withCredentials = true; // 允许携带cookie

export default{
    // 获取类别列表
    queryCataList() {
        const base = "/laji"
        axios.post(base + "/laji/c/getAllc").then((res) => {
            if(res.data.code === 100){
                store.commit("setCataList", res.data.extend.classifications)
            }else{
                // Toast('网络错误');
            }
        }).catch((err) => {
            // Toast('网络错误');
        })
    },
    // 新建类别
    addCata(store,obj) {
        const base = "/laji"
        axios.post(base + "/laji/c/cinsert",{
            'classificationinfoName':obj.param.classificationinfoName,
            'catarequire':obj.param.catarequire,
            'cataeg':obj.param.cataeg,
            'classificationinfoDescription':obj.param.classificationinfoDescription,
        }).then((res) => {
            if(res.data.code === 100){
                obj.that.$Message.success('创建成功');
                store.dispatch('queryCataList')
            }else{
                obj.that.$Message.success('创建失败');
            }
        }).catch((err) => {
            obj.that.$Message.success('网络错误');
        })
    },
    // 编辑类别
    editCata(store,obj) {
        console.log(obj,'edit')
        const base = "/laji"
        axios.post(base + "/laji/c/cupdate",{
            'classificationinfoId':parseInt(obj.id),
            'classificationinfoName':obj.param.classificationinfoName,
            'catarequire':obj.param.catarequire,
            'cataeg':obj.param.cataeg,
            'classificationinfoDescription':obj.param.classificationinfoDescription,
        }).then((res) => {
            if(res.data.code === 100){
                obj.that.$Message.success('编辑成功');
                store.dispatch('queryCataList')
            }else{
                obj.that.$Message.success('编辑失败');
            }
        }).catch((err) => {
            obj.that.$Message.success('网络错误');
        })
    },
    // 删除类别
    deleteCata(store,obj) {
        const base = "/laji"
        axios.post(base + "/laji/c/cdelete",{
            'classificationinfoId':parseInt(obj.id),
        }).then((res) => {
            if(res.data.code === 100){
                obj.that.$Message.success('删除成功');
                store.dispatch('queryCataList')
            }else{
                obj.that.$Message.success('删除失败');
            }
        }).catch((err) => {
            obj.that.$Message.success('网络错误');
        })
    },
    // 获取指南列表
    queryGuideList() {
        const base = "/laji"
        axios.post(base + "/laji/cg/getc").then((res) => {
            if(res.data.code === 100){
                store.commit("setGuideList", res.data.extend.classificationguides)
            }else{
                // Toast('网络错误');
            }
        }).catch((err) => {
            // Toast('网络错误');
        })
    },
    // 新建指南
    addGuide(store,obj) {
        const base = "/laji"
        axios.post(base + "/laji/cg/cgadd",{
            "classificationguideinfoName": obj.param.classificationguideinfoName,
            "classificationguideinfoClassification": obj.param.classificationguideinfoClassification,
        }).then((res) => {
            if(res.data.code === 100){
                obj.that.$Message.success('创建成功');
                store.dispatch('queryGuideList')
            }else{
                obj.that.$Message.success('创建失败');
            }
        }).catch((err) => {
            obj.that.$Message.success('网络错误');
        })
    },
    // 编辑指南
    editGuide(store,obj) {
        console.log(obj,'edit')
        const base = "/laji"
        axios.post(base + "/laji/cg/cgupdate",{
            'classificationguideinfoId':parseInt(obj.id),
            "classificationguideinfoName": obj.param.classificationguideinfoName,
            "classificationguideinfoClassification": obj.param.classificationguideinfoClassification,
        }).then((res) => {
            if(res.data.code === 100){
                obj.that.$Message.success('编辑成功');
                store.dispatch('queryGuideList')
            }else{
                obj.that.$Message.success('编辑失败');
            }
        }).catch((err) => {
            obj.that.$Message.success('网络错误');
        })
    },
    // 删除类别
    deleteGuide(store,obj) {
        const base = "/laji"
        axios.post(base + "/laji/cg/cgdelete",{
            'classificationguideinfoId':parseInt(obj.id),
        }).then((res) => {
            if(res.data.code === 100){
                obj.that.$Message.success('删除成功');
                store.dispatch('queryGuideList')
            }else{
                obj.that.$Message.success('删除失败');
            }
        }).catch((err) => {
            obj.that.$Message.success('网络错误');
        })
    },

    // 获取站点列表
    querySiteList() {
        const base = "/laji"
        axios.post(base + "/laji/loc/getAllloc").then((res) => {
            if(res.data.code === 100){
                store.commit("setSiteList", res.data.extend.locations)
            }else{
                Toast('网络错误');
            }
        }).catch((err) => {
            Toast('网络错误');
        })
    },
    // 新建站点
    addSite(store,obj) {
        const base = "/laji"
        axios.post(base + "/laji/loc/locinsert",{
            "locationinfoName":obj.param.locationinfoName,
            "detail":obj.param.detail,
            "opentime":obj.param.opentime,
            "bucketcata":obj.param.bucketcata,
            "bucketnum":obj.param.bucketnum,
            "attention":obj.param.attention,
        }).then((res) => {
            if(res.data.code === 100){
                obj.that.$Message.success('创建成功');
                store.dispatch('querySiteList')
            }else{
                obj.that.$Message.success('创建失败');
            }
        }).catch((err) => {
            obj.that.$Message.success('网络错误');
        })
    },
    // 编辑站点信息
    editSite(store,obj) {
        console.log(obj,'edit')
        const base = "/laji"
        axios.post(base + "/laji/loc/locupdate",{
            "locationinfoId":obj.id,
            "locationinfoName":obj.param.locationinfoName,
            "detail":obj.param.detail,
            "opentime":obj.param.opentime,
            "bucketcata":obj.param.bucketcata,
            "bucketnum":obj.param.bucketnum,
            "attention":obj.param.attention,
        }).then((res) => {
            if(res.data.code === 100){
                obj.that.$Message.success('编辑成功');
                store.dispatch('querySiteList')
            }else{
                obj.that.$Message.success('编辑失败');
            }
        }).catch((err) => {
            obj.that.$Message.success('网络错误');
        })
    },
    // 删除站点信息
    deleteSite(store,obj) {
        const base = "/laji"
        axios.post(base + "/laji/loc/locdelete",{
            'locationinfoId':parseInt(obj.id),
        }).then((res) => {
            if(res.data.code === 100){
                obj.that.$Message.success('删除成功');
                store.dispatch('querySiteList')
            }else{
                obj.that.$Message.success('删除失败');
            }
        }).catch((err) => {
            obj.that.$Message.success('网络错误');
        })
    },



    // 获取日报列表
    queryReportList() {
        const base = "/laji"
        axios.post(base + "/laji/green/getAllgreen").then((res) => {
            if(res.data.code === 100){
                store.commit("setReportList", res.data.extend.greendailies)
            }else{
                // Toast('网络错误');
            }
        }).catch((err) => {
            // Toast('网络错误');
        })
    },
    // 新建日报
    // addReport(store,obj) {
    //     const base = "/laji"
    //     console.log(obj)
    //     axios.post(base + "/laji/green/add",{
    //         'greendailyinfoDescription': obj.param.greendailyinfoDescription,
    //         'greendailyinfoTitle': obj.param.greendailyinfoDescription,
    //         'greendailyinfoText': obj.param.greendailyinfoText,
    //         'greendailyinfoAuthor': obj.param.greendailyinfoDescription,
    //     }).then((res) => {
    //         if(res.data.code === 100){
    //             obj.that.$Message.success('发布成功');
    //         }else{
    //             obj.that.$Message.success('发布失败');
    //         }
    //     }).catch((err) => {
    //         obj.that.$Message.success('网络错误');
    //     })
    // },

    // 删除日报
    deleteReport(store,obj) {
        const base = "/laji"
        axios.post(base + "/laji/green/delete",{
            "greendailyinfoId":obj.id
        }).then((res) => {
            if(res.data.code === 100){
                obj.that.$Message.success('删除成功');
                store.dispatch('queryReportList')
            }else{
                obj.that.$Message.success('删除失败');
            }
        }).catch((err) => {
            obj.that.$Message.success('网络错误');
        })
    },


    // 获取记录列表
    queryQua() {
        const base = "/laji"
        axios.post(base + "/laji/qua/getAllqua").then((res) => {
            if(res.data.code === 100){
                store.commit("setQuaList", res.data.extend.qualities)
            }else{
                Toast('网络错误');
            }
        }).catch((err) => {
            Toast('网络错误');
        })
    },
    // 新建记录
    addQua(store,obj) {
        const base = "/laji"
        axios.post(base + "/laji/qua/addqua",{
            "qualityinfoClassification":obj.param.qualityinfoClassification,
            "qualityinfoWeight":obj.param.qualityinfoWeight,
        }).then((res) => {
            if(res.data.code === 100){
                obj.that.$Message.success('创建成功');
                store.dispatch('queryQua')
            }else{
                obj.that.$Message.success('创建失败');
            }
        }).catch((err) => {
            obj.that.$Message.success('网络错误');
        })
    },
    // 编辑站点信息
    editQua(store,obj) {
        console.log(obj,'edit')
        const base = "/laji"
        axios.post(base + "/laji/qua/updatequa",{
            "qualityinfoId":obj.id,
            "qualityinfoClassification":obj.param.qualityinfoClassification,
            "qualityinfoWeight":obj.param.qualityinfoWeight,
        }).then((res) => {
            if(res.data.code === 100){
                obj.that.$Message.success('编辑成功');
                store.dispatch('queryQua')
            }else{
                obj.that.$Message.success('编辑失败');
            }
        }).catch((err) => {
            obj.that.$Message.success('网络错误');
        })
    },
    // 删除站点信息
    deleteQua(store,obj) {
        const base = "/laji"
        axios.post(base + "/laji/qua/deletequa",{
            'qualityinfoId':parseInt(obj.id),
        }).then((res) => {
            if(res.data.code === 100){
                obj.that.$Message.success('删除成功');
                store.dispatch('queryQua')
            }else{
                obj.that.$Message.success('删除失败');
            }
        }).catch((err) => {
            obj.that.$Message.success('网络错误');
        })
    },

    // 发送月份，获取垃圾产量数据
    queryQuaByMonth(store,obj) {
        const base = "/laji"
        axios.post(base + "/laji/qua/getAllquaByDate",{
            "date":obj.time,
        }).then((res) => {
            if(res.data.code === 100){
                store.commit("setChartList", res.data.extend.res)
            }else{
                obj.that.$Message.success('创建失败');
            }
        }).catch((err) => {
            obj.that.$Message.success('网络错误');
        })
    },


}