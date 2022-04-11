    const yearDropdownField = $("#yearDropdownField");
    const monthDropdownField = $("#monthDropdownField");
    const dateDropdownField = $("#dateDropdownField");
    const selectedDateField = $("#selectedDateField");

    window.onload = function () {

        populateYearDropdown();
        populateMonthDropdown();
        populateDateDropdown();

        // Initially, we make hidden Date Dropdown Div.


        // Add click event on selectedDateField and called toggle method on dateDropdownDiv
        $("#selectedDateField").click(function () {
            $("#dateDropdownDiv").toggle();
        });
    };

    function populateYearDropdown() {

        //Determine the Current Year.
        const currentYear = new Date().getFullYear();

        //Loop and add the Year values to DropDownList.
        for (let i = currentYear; i >= 1950; i--) {
            const option = document.createElement("OPTION");
            option.innerHTML = i;
            option.value = i;
            yearDropdownField.append(option);
        }
    }

    function populateMonthDropdown() {
        const monthNames = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];
        //Loop and add the Year values to DropDownList.
        for (let i = 0; i < monthNames.length; i++) {
            const option = document.createElement("OPTION");
            option.innerHTML = monthNames[i];
            option.value = i;
            monthDropdownField.append(option);
        }
    }

    function populateDateDropdown() {
        dateDropdownField.empty();
        const year = yearDropdownField.val();
        const month = parseInt(monthDropdownField.val()) + 1;

        //get the last day, so the number of days in that month
        const days = new Date(year, month, 0).getDate();

        //lets create the days of that month
        for (let d = 1; d <= days; d++) {
            const option = document.createElement("OPTION");
            option.innerHTML = d;
            option.value = d;
            dateDropdownField.append(option);
        }
    }

    function onChangeYearAndMonth($event) {
        this.populateDateDropdown();
    }

    function onOkClick() {
        const d = dateDropdownField.val();
        const m = monthDropdownField.val();
        const y = yearDropdownField.val();
       

        // make date object by passing year, month and date value
        const date = new Date(y, m, d);

        // set date object into readonly input field
        selectedDateField.val(date.toLocaleDateString());

        // after set date, hide date dropdown div
        $("#dateDropdownDiv").hide();
    }

    function onNowClick() {
        const date = new Date(); // get date object

        // set values
        yearDropdownField.val(date.getFullYear());
        monthDropdownField.val(date.getMonth());
        dateDropdownField.val(date.getDate());

        // set date value into input field
        selectedDateField.val(date.toLocaleDateString());

        // hide date dropdown div
        $("#dateDropdownDiv").hide();
    }