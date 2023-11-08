make function skillMmbers() {
    restrict: 'E',
    templateUrl: 'modules/skill-members/skill-members.html',
    controller: 'SkillMembersController',
    controllAs: 'vm',
    bindToController: true,
    scope: {
        member: 'member',
    }
}