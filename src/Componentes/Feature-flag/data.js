const apiRes = {
  showLightDarkMode: true,
  showTicTacToe: true,
  showRandomColor: true,
  showAcordion: true,
  showTreeView: false,
};

function featureFlagsDataServiceCall() {
    return new Promise((resolve, reject) => {
        if (apiRes) setTimeout(resolve(apiRes), 500);
        else reject('Erro ocorrido, tente novamente!');
    })
}

export default featureFlagsDataServiceCall;
