//Inspirational Quote Generator
const randomQuote = () => {
    const quoteNum = Math.floor(Math.random() * 10);

    switch (quoteNum) {
        case 1:
            return '“Keep your face always toward the sunshine—and shadows will fall behind you.” —Walt Whitman';
            break;
        case 2:
            return '“It is always the simple that produces the marvelous.” —Amelia Barr';
            break;
        case 3:
            return '“The world is full of magical things patiently waiting for our wits to grow sharper.” —Bertrand Russell';
            break;
        case 4:
            return '“Let us make our future now, and let us make our dreams tomorrow’s reality.” —Malala Yousafzai';
            break;
        case 5:
            return '“All you need is the plan, the road map, and the courage to press on to your destination.” —Earl Nightingale';
            break;
        case 6:
            return '“The glow of one warm thought is to me worth more than money.” —Thomas Jefferson';
            break;
        case 7:
            return '“Once we believe in ourselves, we can risk curiosity, wonder, spontaneous delight, or any experience that reveals the human spirit.” —E. E. Cummings';
            break;
        case 8:
            return '“The power of imagination makes us infinite.” —John Muir';
            break;
        case 9:
            return '“Try to be a rainbow in someone’s cloud.” —Maya Angelou';
            break;
        case 10:
            return '“I believe that if one always looked at the skies, one would end up with wings.” —Gustave Flaubert';
            break;
        default:
            return '“No! Try not. Do. Or do not. There is no try.”';
            break;
    }
 };

 console.log(randomQuote());