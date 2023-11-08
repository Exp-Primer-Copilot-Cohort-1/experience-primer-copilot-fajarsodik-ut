function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'modules/skills/views/member.html',
        contoller: 'SkillsMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: 'm'
        }
    };
}