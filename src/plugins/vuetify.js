import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    state:{
        userID: '2',
    },
    mutations:{
        setUID(state, id){
            state.userID = id;
        }
    }
});
