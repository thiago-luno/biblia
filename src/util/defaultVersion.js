export default function defaultVersion(){
 return localStorage.getItem('version') ? localStorage.getItem('version') : 'nvt' ;
}
