# COMANDOS PARA ESLINT 
<p>Instalacion de eslint como dependencia de desarrollo</p>
``` bash
    npm i -D eslint 
```
<p>Inicialisar eslint</p>
``` bash
    npx eslint --init
```
<p>Linter de eslint</p>
``` bash 
    npx ellint --fix .
```

# COMANDOS PARA PRETTY
<p>intalar prettier como dependencia de desarrollo</p>
``` bash
    npm i -D prettier
```

<p>Linter de prettier</p>
``` bash
    npx prettier --write "**/*.{js,jsx,ts,tsx}"
```

# COMANDOS PARA VITE
<p>Inicializar un proyecto react con vite</p>
``` bash 
    npm init vite@latest
```

# DOCKER
<p>Inicialisar un contenedor con postgres</p>
``` bash 
    docker run -p 5432:5432 --name postgres -e POSTGRES_PASSWORD=abc123** -d postgres
```

# postges por terminal
<p>Establecer conexion </p>
``` bash 
    psql -U postsgres 
```
<p>listar las bases de datos</p>
``` bash 
    \l
```
<p>estableser una db </p>
``` bash 
    \c
```