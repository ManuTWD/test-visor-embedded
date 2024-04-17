import './style.css'

document.querySelector('#app').innerHTML = `
<h2>Ejemplo Visor360 embebido</h2>
<p>La idea esta en copiar la url del visor, que tendrá un ID con el lugar en concreto.</br> Por ejemplo Casa de Colón que tendría la siguiente url con el id: <strong>"https://kind-island-084eb6c03.5.azurestaticapps.net/?id=659ea094531f6f4dbd03ae7f"</strong>.</br>El componente tendrán que ajustarlo al tamaño que quieran en su web.</p>

<iframe src="https://kind-island-084eb6c03.5.azurestaticapps.net/?id=659ea094531f6f4dbd03ae7f" height="800" width="1280" title="Iframe Example"></iframe>
`