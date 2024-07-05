import React, { useState } from "react";
import { observer } from 'mobx-react';
import style from './Home.module.css';
import Form from "../Form/Form";
import AddWord from "../AddWord/AddWord";
import ListWords from "../Listwords/ListWords";
import ListTopics from "../ListTopic/ListTopics";

const Home = observer(() => {
    const [formVisible, setFormVisible] = useState(false);
    let myForm;
    if (formVisible) {
        myForm = <div className=""><Form formVisible={formVisible} setFormVisible={setFormVisible} /></div >
    } else { myForm = <></> }

    return (
        <main>
            <aside>
                <div className={style.listContainer}>
                    <AddWord formVisible={formVisible}
                        setFormVisible={setFormVisible}
                    />
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
