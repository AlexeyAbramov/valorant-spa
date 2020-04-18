export default{
    namespaced: true,
    state:{
        heading:[
            'Tier',
            'Name',
            'Type',
            'Cost',
            'Fire Mode',
            'Head',
            'Body',
            'Leg',
            'Range',
            'Mag Size',
            'Fire Rate',
            'Penetration'
        ],
        weapons:[
          
        ]
    },
    getters:{
        weapons(state){
            return state.weapons;
        }
    }
}