import React, { useState } from "react";
import { observer } from 'mobx-react';
import style from './Home.module.css'
import ListTopics from "../ListTopic/ListTopics";
import ListWords from "../Listwords/ListWords";
import AddWord from "../AddWord/AddWord";
import Form from "../Form/Form";

const Home = observer(() => {

    const [formVisible, setFormVisible] = useState(false);
    let myForm;
    if (formVisible) {
        myForm = <div className=""><Form /></div >
    } else { myForm = <></> }

    return (
        <main>
            <aside>
                <div className={style.listContainer}>
                    <AddWord setFormVisible={setFormVisible} />
                    <h2>Слова для повторения</h2>
                    <ListWords />
                    {myForm}
                </div>
            </aside>
            <ListTopics />
        </main>
    )
})

export default Home;
