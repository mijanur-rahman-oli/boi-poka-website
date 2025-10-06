import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../Utility/addToDB';
import Book from '../Book/Book';

const ReadList = () => {
    const [readList, setReadList] = useState([])

    const data = useLoaderData()

    useEffect(() => {
        const storedBookData = getStoredBook();
        const convertedData = storedBookData.map(id => parseInt(id))
        const myReadList = data.filter(book => convertedData.includes(book.bookId))
        setReadList(myReadList)

    }, [])



    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <div className='grid grid-cols-3 py-8'>
                      {
                        readList.map((perBook)=><Book key={perBook.bookId} singleBook={perBook}></Book>)
                      }
                    </div>
                

                </TabPanel>
                <TabPanel>
                    <h2 className='flex items-center- justify-center py-16'>Wish list is empty. Please add some books!</h2>
                </TabPanel>
            </Tabs>
        </div>
    )

}
export default ReadList
