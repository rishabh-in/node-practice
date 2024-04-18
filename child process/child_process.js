process.on("message", (data) => {
  console.log(data);
})

process.send({data: "Message from child0"})

process.send({data: "Message from child1"})
process.send({data: "Message from child2"})
process.send({data: "Message from child3"})
process.send({data: "Message from child4"})
process.send({data: "Message from child5"})
process.send({data: "Message from child6"})
