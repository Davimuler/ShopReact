

export const getFilteredItems=(state)=>{
    switch (state.Items.filterSection){
        case "Santechnics":{
            return state.Items.data

        }
        case "Ceramics":{
            return state.Items.data.filter(obj => obj.section === 'Ceramics');
        }
        case "Smesitili":{
            return state.Items.data.filter(obj => obj.section === 'Smesitili');
        }
        case "Moyki":{
            return state.Items.data.filter(obj => obj.section === 'Moyki');
        }
        case "Sifons":{
            return state.Items.data.filter(obj => obj.section === 'Sifons');
        }
        case "Bathroom garniture":{
            return state.Items.data.filter(obj => obj.section === 'Bathroom garniture');
        }
    }

}
