// import { database } from '../firebase';
// import { clearNewTeam } from './new-message';
//
// const teamsRef = database.ref('teams');
//
// export const addMessage = (key = Date.now(), { content, uid }) => {
//   return {
//     type: 'ADD_MESSAGE',
//     content,
//     key,
//     timeStamp: Date.now(),
//     uid
//   };
// };
//
// export const deleteMessage = (key) => {
//   return {
//     type: 'DELETE_MESSAGE',
//     key
//   };
// };
//
// export const createMessage = ({ content, uid }) => {
//   return (dispatch) => {
//     const message =  {
//       timeStamp: Date.now(),
//       content,
//       uid
//     };
//
//     messagesRef.push(message).then(() => {
//       dispatch(clearNewMessage());
//     });
//   };
// };
//
// export const destroyMessage = (key) => {
//   return (dispatch) => {
//     messagesRef.child(key).remove().then(() => {
//       dispatch(deleteMessage(key));
//     });
//   };
// };
//
// export const startListeningForTeams = () => {
//   return (dispatch) => {
//     teamsRef.on('child_added', (snapshot) => {
//       dispatch(addTeam(snapshot.key, snapshot.val()));
//     });
//
//     teamsRef.dispatch(addMessage(snapshot.key, snapshot.val()));
//     });
//
//     teamsRef.on('child_removed', (snapshot) => {
//       dispatch(deleteMessage(snapshot.key));
//     });
//   };
// };
