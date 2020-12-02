export default function auth ({ next, store }){
    if(!store.getters.isLoggedin) {
        console.log("not");
        return next({
            name: 'login'
        });
    }
    console.log("Yes");
    return next();
}
