#Olá Mundo

###Este projeto foi desenvolvido durante um curso de React da Alura pelo programa ONE na Escola de Frontend. A aplicação é uma página de dicas e informações sobre o mundo da Tecnologia da Informação (TI).

##Funcionalidades
- Navegação entre páginas: Utilização do React Router para navegar entre diferentes seções da aplicação.
- Exibição de posts: Posts com dicas e informações sobre TI.
- Recomendações de posts: Sugestões de outros posts relacionados.
- Renderização de markdown: Uso de React Markdown para renderizar o conteúdo dos posts.
- CSS Modular: Estilização dos componentes de maneira modular para evitar conflitos de escopo de estilos.
- Hooks do React: Utilização de vários hooks como useState, useEffect, useParams, entre outros, para gerenciar o estado e efeitos colaterais na aplicação.
- Página Sobre Mim: Uma página dedicada com informações sobre o desenvolvedor do projeto.

##Tecnologias Utilizadas
- React: Biblioteca JavaScript para construir interfaces de usuário.
- React Router: Biblioteca para roteamento em aplicações React.
- React Markdown: Biblioteca para renderização de markdown.
- CSS Modules: Para estilização dos componentes de maneira modular.

##Estrutura do Projeto
```bash
/public
    /assets
        /posts
            /1
                capa.png
            /2
                capa.png
            ...
/src
    /components
        PostModelo.js
        PaginaPadrao.js
        PostCard.js
    /paginas
        NaoEncontrada.js
        SobreMim.js
    /assets-src
        posts.json
    index.js
```

##Sobre o React Router
O React Router é uma biblioteca que permite gerenciar a navegação em uma aplicação React. Ele oferece componentes como Route, Link e BrowserRouter para definir rotas, criar links de navegação e gerenciar o histórico de navegação da aplicação. No nosso projeto, usamos o useParams para capturar parâmetros da URL e exibir o post correspondente.

##Exemplo de Uso do React Router
```javascript
import { Route, Routes, useParams } from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<Post />} />
            <Route path="/sobre-mim" element={<SobreMim />} />
        </Routes>
    );
}

function Post() {
    const { id } = useParams();
    // Lógica para buscar e exibir o post com o ID correspondente
}
```

##CSS Modular
CSS Modules permitem a criação de estilos que são automaticamente escopados para o componente em que são usados. Isso evita conflitos de nome de classe e facilita a manutenção dos estilos.

##Exemplo de CSS Modular
post.module.css:
```css
.postCard {
    border: 1px solid #ddd;
    padding: 16px;
    border-radius: 8px;
}

.postImage {
    width: 100%;
    height: auto;
    border-radius: 8px;
}

.postTitle {
    font-size: 1.5em;
    margin: 8px 0;
}

.postExcerpt {
    color: #555;
}
```

