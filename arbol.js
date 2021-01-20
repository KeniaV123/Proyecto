const Node = require('./node');

class Arbol{
    constructor(){
        this.inicio = null;
    }
  
    valorNulo(){
        return this.inicio === null;
    }
  
    agregar(expresion){
        if (this.valorNulo()){
            this.inicio = new Node(expresion);
            return;
        }
  
        var aux = this.inicio;
  
        while(aux){
            if(expresion < aux.expresion){
                if(aux.izquierda){
                    aux = aux.izquierda;
                } else{
                    aux.izquierda = new Node(expresion);
                    return;
                }
            } else{ 
                if(aux.derecha){
                aux = aux.derecha;
                } else{
                    aux.derecha = new Node(expresion);
                    return;
                }
            }
        }
    }
  
    agregarRecorrido(expresion, node = this.inicio){
        if(!node){
            this.inicio = new Node(expresion);
            return;
        }
  
        if(expresion < node.expresion){
            if(node.izquierda){
                return this.agregarRecorrido(expresion, node.izquierda);
        }
        node.izquierda = new Node(expresion);
        return;
        } else{ 
            if(node.derecha){
                return this.agregarRecorrido(expresion, node.derecha);
            }
            node.derecha = new Node(expresion);
            return;
        }
    }
    
    preorder(node = this.inicio){
        if(!node){
            return;
        }
        console.log(node.expresion);
        this.preorder(node.izquierda);
        this.preorder(node.derecha);
    }
    
    postorder(node = this.inicio){
        if(!node){
            return;
        }
        this.postorder(node.izquierda);
        this.postorder(node.derecha);
        console.log(node.expresion);
    }
}

module.exports = Arbol;