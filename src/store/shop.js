export default {
    state : {
        watches: [
            {
                id: 1,
                title: 'Paul Rich v1',
                price: 3200,
                desc: "Fully descriprion for PRv1",
                img: "img/shop/paul-rich/v1.jpg"
            },
            {
                id: 2,
                title: 'Rolex Aquamarine',
                price: 320000,
                desc: "Fully descriprion for Rolex",
                img: " img/shop/rolex/rolex.jpg"
            }
        ]
    },

    actions: {

    },

    mutations: {

    },
    getters: {
        getAllWathes : (state) => {            
            return state.watches;
        },

        getWatchById : (state, id) => {
            return state.watches.filters(watch => watch.id === id);
        }
    }
}