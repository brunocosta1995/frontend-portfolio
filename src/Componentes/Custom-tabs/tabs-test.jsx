import CustomTabs from "./tabs";



export default function TabsTest() {

    function RandomComponent() {
        return <h1>Componente Aleatório</h1>
    }


    const tabs = [
        {
            label: 'Tab 1',
            content: 'Este é o conteúdo 1'
        },
        {
            label: 'Tab 2',
            content: 'Este é o conteúdo 2'
        },
        {
            label: 'Tab 3',
            content: <RandomComponent/>
        }
    ]

    function handleChange(getCurrentIndex) {
        console.log(getCurrentIndex);
    }



    return (
        <CustomTabs tabsContent={tabs} onChange={handleChange}/>
    )
}