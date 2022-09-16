export default class Modules {
    constructor(specializedSubjects, title) {
        this.specializedSubjects = [...specializedSubjects];
        this.title = title;
        this.modules = {};
        this.count = 1;
        this.getModules()
    }

    getModules() {
        this.modules[this.count] = this.specializedSubjects.splice(0, 5);
        if(this.specializedSubjects.length > 0) {
            this.count++;
            this.getModules()
        } else {
            console.dir(this.modules)
        }
    }
    render() {
        let html = '';
        for(let key in this.modules) {
            html += `<section class="module">
                <div class="orange-line"></div>
                <h4>${key} модуль</h4>
                <ul>
                    <li><span>${this.modules[key][0].string}</span></li>
                    <li><span>${this.modules[key][1].string}</span></li>
                    <li><span>${this.modules[key][2].string}</span></li>
                    <li><span>${this.modules[key][3].string}</span></li>
                    <li><span>${this.modules[key][4].string}</span></li>
                </ul>
            </section>`
        }
        return html;
    }
    renderForPhone() {
        let html =  '';
        for(let key in this.modules) {
            html += `
            <div class="accordion-item">
                <input class="accordion-item_input" type="checkbox" id="accordion-${this.title}-${key}">
                <label class="accordion-item_trigger" for="accordion-${this.title}-${key}">
                    <span class="plus"><i class="fas fa-plus"></i></span> <span class="minus"><i class="fas fa-minus"></i></span> ${key} модуль
                </label>
                <div class="accordion-item_content">
                    <ul>
                        <li><span>${this.modules[key][0].string}</span></li>
                        <li><span>${this.modules[key][1].string}</span></li>
                        <li><span>${this.modules[key][2].string}</span></li>
                        <li><span>${this.modules[key][3].string}</span></li>
                        <li><span>${this.modules[key][4].string}</span></li>
                    </ul>
                </div>
            </div>`
        }
        return html;
    }
}