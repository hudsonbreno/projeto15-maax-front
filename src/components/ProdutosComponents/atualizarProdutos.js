export default function atualizarProdutos(value){
    const urlProdutos = `${process.env.REACT_APP_API_URL}`;

    body = {
        "categoria":{value  }
    }
    const res = axios.post(`${urlProdutos}/categoria`, body);
    
    res.then((res) => {
      setProdutos(res.data.rows);
    });
    res.catch((erro) => {
      console.log("aqui" + erro);
    });
    return(console.log(value))
}