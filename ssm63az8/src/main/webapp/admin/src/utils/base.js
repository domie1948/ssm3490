const base = {
    get() {
        return {
            url : "http://localhost:8080/ssm63az8/",
            name: "ssm63az8",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssm63az8/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "软考系统"
        } 
    }
}
export default base
