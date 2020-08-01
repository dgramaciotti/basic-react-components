import React from 'react';

import Card from './components/layout/Card';
import ReactDOM from 'react-dom';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Random from './components/basicos/Random';
import Family from './components/basicos/Family';
import FamilyMember from './components/basicos/FamilyMember';
import List from './components/arrays/List';
import If from './components/basicos/Conditional';
import Father from './components/basicos/Father';
import Input from './components/basicos/InputWithControl';
import Counter from './components/class/counter';
import Lottery from './components/lottery/Lottery';

import './index.css';
const myVariable = Math.round(Math.random()*100)/100;
ReactDOM.render(<div className="cards">
    <Card title="Ex. 1 - First react component" color="green">
        <Primeiro></Primeiro>
    </Card>
    <Card title="Ex. 2 - Component with var passed as param">
        <ComParametro title='My title' subtitle='Cool!' variable={myVariable}></ComParametro>
    </Card>
    <Card title="Ex. 3 - Component with logic inside it">
        <Random min='1' max='10'></Random>
    </Card>
    <Card title="Ex. 4 - Component with inheritance">
        <Family sobrenome="Silva">
            <FamilyMember nome="Pedro"></FamilyMember>
            <FamilyMember nome="Ana"></FamilyMember>
            <FamilyMember nome="Julia"></FamilyMember>
        </Family>
    </Card>
    <Card title="Ex. 5 - Component with Creation Conditioned to a array">
        <List></List>
    </Card>
    <Card title="Ex. 6 - Component with condition on loading">
        <If condition={true}>
            <div>Loaded and true!</div>
        </If>
        <If condition={false}>
            Will not be loaded!
        </If>
    </Card>
    <Card title="Ex. 7 - Change in DOM with Hooks">
        <Father></Father>
    </Card>
    <Card title="Ex. 8 - Change Event with control">
        <Input></Input>
    </Card>
    <Card title="Ex. 9 - Class based component">
        <Counter initialValue={10}></Counter>
    </Card>
    <Card title="Ex. 10 - Number drawer for lottery">
        <Lottery></Lottery>
    </Card>
</div>
,
document.getElementById('root'));