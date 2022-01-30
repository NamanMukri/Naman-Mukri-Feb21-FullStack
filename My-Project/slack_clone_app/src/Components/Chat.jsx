import React,{useEffect, useRef} from 'react';
import styled from 'styled-components';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ChatInput from './ChatInput';
import {useSelector} from 'react-redux'
import {selectRoomId} from '../features/appSlice'
import {useCollection,useDocument} from 'react-firebase-hooks/firestore'
import { db } from '../firebase';
import Message from './Message'

function Chat() {
    const chatRef = useRef(null)
    const roomId=useSelector(selectRoomId)
    const [roomDetails]=useDocument(
        roomId && db.collection('rooms').doc(roomId)
    )
    const [roomMessages,loading]=useCollection(
        roomId && db.collection('rooms').doc(roomId).collection('messages').orderBy('timestamp','asc')
    )
    console.log(roomDetails?.data().name)
    console.log(roomMessages)

    useEffect(()=>{
        chatRef?.current?.scrollIntoView({
            behavior:'smooth'
        });


    }, [roomId,loading])


    return(
      <ChatContainer>
          {roomDetails && roomMessages &&(
          <>
          <Header>
              <HeaderLeft>
                  <h4>
                      <strong>#{roomDetails?.data().name}</strong>
                  
                  <StarBorderIcon/></h4>
              </HeaderLeft>
              <HeaderRight>
                  <p>
                      <InfoOutlinedIcon/>Details
                  </p>

              </HeaderRight>
          </Header>
          <ChatMessages>
            {
                roomMessages?.docs.map((doc)=>{   
                    const {message, timestamp, user, userImage}= doc.data()       
                   
                    return (
                        <Message 
                        key={doc.id}                        
                        message={message}
                        timestamp={timestamp}
                        user={user}
                        userImage={userImage}
                        />
                    )                
                })
            }
            <ChatBottom ref={chatRef}/>
          </ChatMessages>
          <ChatInput chatRef={chatRef} channelName={roomDetails?.data().name} channelId={roomId}/>

          
          </>)}
      </ChatContainer>
  );
}

export default Chat;
const ChatBottom=styled.div`
    padding-bottom: 300px;
`

const ChatMessages=styled.div`
    
`;

    



const Header = styled.div`
    display: flex;
    justify-content: space-between;    
    padding: 20px;
    border-bottom: 2px solid lightgray;
    height: fit-content;
`

const HeaderLeft = styled.div`
    display: flex;
    align-items: center;
> h4 {
    display: flex;
    text-transform: lowercase;
    margin-right: 20px;
}
>h4 >.MuiSvgIcon--root{
    margin-left: 10px;
    font-size: 18px;
}
    
`
const HeaderRight = styled.div`
>p{
    display: flex;
    align-items: center;
    font-size: 14px;
}
>p > .MuiSvgIcon-root{
    margin-right: 5px;
    font-size:16px;


}

`

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.7;
  flex-grow  : 1;
  overflow-y: scroll;

`