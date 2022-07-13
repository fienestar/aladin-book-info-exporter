function Extract()
{
  let bookbtns = Array.from(document.querySelectorAll('input[type=checkbox].shopcode_basket_check.basket_checkbox'))
  bookbtns = bookbtns.filter(v=>v.checked)
  
  const books = bookbtns.map(v=>v.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement)
  const mapper = v => {
      const bookName = v.querySelectorAll('a')[1].innerText.replace(/\[국내도서\] */g, '').replace(/\[해외도서\]/g, '')
      const fee = v.querySelector('.p1').innerText
      
      return ({
        bookName,
        fee
      })
    }
  
  return books
    .filter(v=>{
      try{
        mapper(v);
        return true;
      }catch(e){
        return false;
      }
    }).map(mapper)
}

console.log(JSON.stringify(Extract()))
