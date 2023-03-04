import { Tarjeta, BlogPost } from './tarea/Tarea1.js';
import { MatchNombre, PasswordInput, ValidationInput } from './tarea/Tarea2.js';
import { UncontrolledCheckbox, CheckboxList } from './tarea/Tarea3.js';
import { ControlledCheckbox, CheckboxListWithState } from './tarea/Tarea4.js';

// Tarea 1!
ReactDOM.render(
  <div>
    <Tarjeta
      nombre="Facundo Castillo"
      titulo="Programador Web"
      imagen="https://avatars.githubusercontent.com/u/121767553?v=4"
    />
    <BlogPost
      titulo="Ardillas"
      parrafos={`Hoy vi una ardilla.\nLa ardilla era negra, era más grande que otras ardillas, tenía muchos dientes grandes y encima andaba siempre en cuatro patas, moviendo la cola.\nCreo que puede haber sido un perro, dado que en Argentina no hay ardillas.`}
      autor={{
        nombre: 'Facundo Castillo',
        titulo: 'Programador Web',
        imagen: 'https://avatars.githubusercontent.com/u/121767553?v=4',
      }}
    />
  </div>,
  document.getElementById('react-app')
); 

// Tarea 2!


const inputValidMinLength = (value) => value.length >= 8;
const inputValidNotSpace = (value) => !value.match(' ');
const inputValidMail = (value) =>
  value.match(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

ReactDOM.render(
  <div>
    <MatchNombre nombre="Facundo" />
    <PasswordInput minLength={5} />
    <ValidationInput validation={inputValidNotSpace} isPassword={false} placeholder={'No space validation'} />
    <ValidationInput validation={inputValidMail} isPassword={false} placeholder={'Mail validation'} />
    <ValidationInput validation={inputValidMinLength} isPassword={true} placeholder={'Password validation'} />
  </div>,
  document.getElementById('react-app')
); 

// Tarea 3!
ReactDOM.render(
  <div>
    <UncontrolledCheckbox 
    name="Facundo"
    initialValue={true}
    />,
    <CheckboxList 
    items={{  
      uno: false,
      dos: true,
      tres: false,
    }}
    initialValue={true}
    />
  </div>,
document.getElementById('react-app')
);  

// Tarea 4!

ReactDOM.render(
    <CheckboxListWithState 
    items={{  
      uno: false,
      dos: true,
      tres: false,
    }}
    />,
document.getElementById('react-app')
); 
