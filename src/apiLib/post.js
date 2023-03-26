
const _setHeader = (token) => {
  return {
    'authorization': 'Bearer ' + token
  };
}

const post = async (api, template, testData, token) => {
  const options = {
    name:           "Untangler API example 1",
    class:          "Sample data",
    data:           testData,
    template,
    opformat:        "grid"
  };
  const response = await api.post('/untanglements',
    options,
    {headers: _setHeader(token)}
  )
  .catch(error => {
    console.log(`{post} error:`, error);
  });
  return response.data;
}

export default post;