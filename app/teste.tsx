// import React, { useEffect, useState } from "react";
// import { SafeAreaView, Button, Text } from "react-native";
// import { RTCPeerConnection, mediaDevices, RTCSessionDescription, RTCIceCandidate } from "react-native-webrtc";
// import io from "socket.io-client";

// const App = () => {
//   const [peerConnection, setPeerConnection] = useState<RTCPeerConnection | null>(null);
//   const [socket, setSocket] = useState<any>(null);

//   useEffect(() => {
//     const signalingServer = "http://localhost:3000"; // Substitua com o IP do seu servidor
//     const newSocket = io(signalingServer);
//     setSocket(newSocket);

//     const pc = new RTCPeerConnection({
//       iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
//     });
//     setPeerConnection(pc);

//     // Usando addEventListener para escutar icecandidate
//     pc.addEventListener("icecandidate", (event) => {
//       if (event.candidate) {
//         newSocket.emit("ice-candidate", event.candidate);
//       }
//     });

//     // Recebe a oferta e envia a resposta
//     newSocket.on("offer", async (offer: RTCSessionDescription) => {
//       await pc.setRemoteDescription(new RTCSessionDescription(offer));
//       const answer = await pc.createAnswer(); // Correção: não passa argumentos aqui
//       await pc.setLocalDescription(answer);
//       newSocket.emit("answer", answer);
//     });

//     // Recebe a resposta
//     newSocket.on("answer", async (answer: RTCSessionDescription) => {
//       await pc.setRemoteDescription(new RTCSessionDescription(answer));
//     });

//     // Recebe candidatos ICE
//     newSocket.on("ice-candidate", async (candidate: RTCIceCandidate) => {
//       await pc.addIceCandidate(new RTCIceCandidate(candidate));
//     });

//     return () => {
//       newSocket.disconnect();
//       pc.close();
//     };
//   }, []);

//   const startCall = async () => {
//     if (peerConnection) {
//       const stream = await mediaDevices.getUserMedia({ audio: true });
//       stream.getTracks().forEach((track) => peerConnection.addTrack(track, stream));

//       const offer = await peerConnection.createOffer({});
//       await peerConnection.setLocalDescription(offer);
//       socket.emit("offer", offer); // Envia a oferta para o outro cliente
//     }
//   };

//   return (
//     <SafeAreaView>
//       <Text>Call Center App</Text>
//       <Button title="Iniciar Chamada" onPress={startCall} />
//     </SafeAreaView>
//   );
// };

// export default App;
