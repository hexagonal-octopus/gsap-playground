document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin('SplitText');

    
});

document.fonts.ready.then(() => {
    let split = SplitText.create('.text',{
        type:'chars, words, lines',
        wordsClass: 'char++',
        mask: 'words',
        onSplit: (self) => {
            gsap.from(self.words,{
                y:100,
                x:0,
                // rotate:30,
                autoAlpha:0,
                // stagger:0.05,
                stagger:{
                    amount:0.4,
                    from: 'beginning',
                    // repeat: -1,
                    // yoyo: true
                },
                easing: 'powerBack4'
            })
        }
    });

    
})