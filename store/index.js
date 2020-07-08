export const state = () => ({
    categories: [],
})

export const mutations  = {
    setCategories(state, data){
        state.categories = data;
    }
};

export const actions = {
    async getAllProducts({}, query = {}){
        return await this.$axios.$get('/products', {params: query});
    },
    async getAllCategories({}, query = {}){
        return await this.$axios.$get('/categories', {params: query});
    },
    async nuxtServerInit ({commit}) {
        const categories = await this.$axios.$get('/categories', {params: {sort: 'name', project: 'name,icon,url,featured'}});
        commit('setCategories', categories.results);
	},
}