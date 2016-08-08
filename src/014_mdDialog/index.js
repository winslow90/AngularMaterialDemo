/**
 * Created by superman90 on 8/7/16.
 */
//todo $mdDialog's configuration is kind of complicated, and it needs further more attention
angular
    .module('demoApp', ['ngMaterial'])
    .controller('EmployeeController', EmployeeEditor)
    .controller('GreetingController', GreetingController);
// Fictitious Employee Editor to show how to use simple and complex dialogs.
function EmployeeEditor($scope, $mdDialog) {
    var alert;
    $scope.showAlert = showAlert;
    $scope.closeAlert = closeAlert;
    $scope.showDialog=showCustomGreeting3;
    $scope.showGreeting = showCustomGreeting2;
    $scope.hasAlert = function() { return !!alert };
    $scope.userName = $scope.userName || 'Bobby';
    // Dialog #1 - Show simple alert dialog and cache
    // reference to dialog instance
    function showAlert() {
        alert = $mdDialog.alert()
            .title('Attention, ' + $scope.userName)
            .textContent('This is an example of how easy dialogs can be!')
            .ok('Close');
        $mdDialog
            .show( alert )
            .finally(function() {
                alert = undefined;
            });
    }
    // Close the specified dialog instance and resolve with 'finished' flag
    // Normally this is not needed, just use '$mdDialog.hide()' to close
    // the most recent dialog popup.
    function closeAlert() {
        $mdDialog.hide( alert, "finished" );
        alert = undefined;
    }
    // Dialog #2 - Demonstrate more complex dialogs construction and popup.
    function showCustomGreeting2($event) {
        $mdDialog.show({
            targetEvent: $event,
            template:
            '<md-dialog>' +
            '  <md-dialog-content>Hello {{ employee }}!</md-dialog-content>' +
            '  <md-dialog-actions>' +
            '    <md-button ng-click="closeDialog()" class="md-primary">' +
            '      Close Greeting' +
            '    </md-button>' +
            '  </md-dialog-actions>' +
            '</md-dialog>',
            controller: 'GreetingController',
            onComplete: afterShowAnimation,
            locals: { employee: $scope.userName }
        });
        // When the 'enter' animation finishes...
        function afterShowAnimation(scope, element, options) {
            // post-show code here: DOM element focus, etc.
        }
    }
    // Dialog #3 - Demonstrate use of ControllerAs and passing $scope to dialog
    //             Here we used ng-controller="GreetingController as vm" and
    //             $scope.vm === <controller instance="">
    function showCustomGreeting3() {
        $mdDialog.show({
            clickOutsideToClose: true,
            scope: $scope,        // use parent scope in template
            preserveScope: true,  // do not forget this if use parent scope
            // Since GreetingController is instantiated with ControllerAs syntax
            // AND we are passing the parent '$scope' to the dialog, we MUST
            // use 'vm.<xxx>' in the template markup
            template: '<md-dialog>' +
            '  <md-dialog-content>' +
            '     Hi There {{vm.employee}}' +
            '  </md-dialog-content>' +
            '</md-dialog>',
            controller: function DialogController($scope, $mdDialog) {
                $scope.closeDialog = function() {
                    $mdDialog.hide();
                }
            }
        });
    }
}
// Greeting controller used with the more complex 'showCustomGreeting()' custom dialog
function GreetingController($scope, $mdDialog, employee) {
    // Assigned from construction <code>locals</code> options...
    $scope.employee = employee;
    $scope.closeDialog = function() {
        // Easily hides most recent dialog shown...
        // no specific instance reference is needed.
        $mdDialog.hide();
    };
}