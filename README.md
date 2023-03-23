# COMANDOS PARA ESLINT 
Instalacion de eslint como dependencia de desarrollo
```properties
    npm i -D eslint 
```
Inicialisar eslint
```properties
    npx eslint --init
```
Linter de eslint
```properties 
    npx ellint --fix .
```

# COMANDOS PARA PRETTY
intalar prettier como dependencia de desarrollo
```properties
    npm i -D prettier
```

Linter de prettier
```properties
    npx prettier --write "**/*.{js,jsx,ts,tsx}"
```

# COMANDOS PARA VITE
Inicializar un proyecto react con vite
```properties 
    npm init vite@latest
```

# DOCKER
Inicialisar un contenedor con postgres
```bash 
    docker run -p 5432:5432 --name postgres -e POSTGRES_PASSWORD=abc123** -d postgres
```

# postges por terminal
Establecer conexion
```bash 
    psql -U postsgres 
```
listar las bases de datos
```bash 
    \l
```
estableser una db
```bash 
    \c
```
