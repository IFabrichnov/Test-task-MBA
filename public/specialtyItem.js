import Modules from './modules.js'

export default class specialtyItem {
    constructor(title, specializedSubjects) {
        this.title = title;
        this.specializedSubjects = [...specializedSubjects];
        this.addingModules;
        this.addingModulesForPhone;
        this.getLi();
    }
    getLi() {
        const module = new Modules(this.specializedSubjects, this.title);
        this.addingModules = module.render();
        this.addingModulesForPhone = module.renderForPhone();
    }
    render() {
        return `<section class="modules">
            <h3>${this.title}</h3>
            <div class="modules-container">
                ${this.addingModules}
            </div>
        </section>
        <div class="accordion">
            <h3>${this.title}</h3>
                ${this.addingModulesForPhone}
        </div>`;
    }
}