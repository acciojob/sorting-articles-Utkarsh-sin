//your JS code here. If required.
const bands = [
            'The Plot in You',
            'The Devil Wears Prada',
            'Pierce the Veil',
            'Norma Jean',
            'The Bled',
            'Say Anything',
            'The Midway State',
            'We Came as Romans',
            'Counterparts',
            'Oh, Sleeper',
            'A Skylit Drive',
            'Anywhere But Here',
            'An Old Dog',
            'A Day to Remember',
            'The Amity Affliction',
            'The Word Alive'
        ];

        const ignoredWords = ["a", "an", "the"];
            return bands.sort((a, b) => {
                const firstWordA = a.split(" ")[0].toLowerCase();
                const firstWordB = b.split(" ")[0].toLowerCase();
                if (ignoredWords.includes(firstWordA) && ignoredWords.includes(firstWordB)) {
                    return 0;
                } else if (ignoredWords.includes(firstWordA)) {
                    return 1;
                } else if (ignoredWords.includes(firstWordB)) {
                    return -1;
                } else {
                    return a.localeCompare(b);
                }
            });
}