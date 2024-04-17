import { useContext } from "react"
import Accordion from "../Accordion"
import LightDarkMode from "../Light-dark-mode"
import RandomColor from "../Random-color"
import TicTacToe from "../Tic-tac-toe"
import TreeView from "../Tree-view"
import { FeatureFlagsContext } from "./context"

export default function FeatureFlags() {

    const {loading, enabledFlags} = useContext(FeatureFlagsContext);


const renderComponents = [
    {
        key: 'showLightDarkMode',
        component: <LightDarkMode/>
    },
    {
        key: 'showTicTacToe',
        component: <TicTacToe/>
    },
    {
        key: 'showRandomColor',
        component: <RandomColor/>
    },
    {
        key: 'showAcordion',
        component: <Accordion/>
    },
    {
        key: 'showTreeView',
        component: <TreeView/>
    }
]
    if (loading) {
        return <h2>Carregando dados, aguarde</h2>
    }

    function checkComponents(getKey) {
        return enabledFlags[getKey];
    }

    return <div>
        <h1 style={{display: 'flex', justifyContent: 'center'}}>Feature Flags</h1>
        {
            renderComponents.map(componentItem => checkComponents(componentItem.key) ? componentItem.component : null)
        }
    </div>
}