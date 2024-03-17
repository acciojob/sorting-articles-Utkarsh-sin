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

        function sortBands(bands) {
            return bands.sort((a, b) => a.localeCompare(b));
        }

        const sortedBands = sortBands(bands);

        const bandList = document.getElementById("band");
        sortedBands.forEach(band => {
            const listItem = document.createElement("li");
            listItem.textContent = band;
            bandList.appendChild(listItem);
        });