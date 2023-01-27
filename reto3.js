let sGifts = 0
     let sReins = 0
    let maxPackOfGifts = 0
     packOfGifts.map((gift,i)=>{
     sGifts += gift.length
    })
     reindeers.map((reindeer,i)=>{
      sReins += reindeer.length*2
     })
     maxPackOfGifts = Math.floor(sReins / sGifts)
    return maxPackOfGifts