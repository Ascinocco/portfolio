<template>
    <div>
        <form class="form-horizontal">
            <fieldset>
                <!--<legend>Legend</legend>-->
                <h3>Reach Out!</h3>
                <br>
                <div class="form-group">
                    <label for="inputEmail" class="col-md-2 control-label">Email</label>

                    <div class="col-md-10">
                        <input type="email" class="form-control" name="email" id="inputEmail" placeholder="Email">
                    </div>
                </div>

                <div class="form-group">
                    <label for="inputName" class="col-md-2 control-label">Name</label>

                    <div class="col-md-10">
                        <input type="text" class="form-control" name="email" id="inputName" placeholder="Name">
                    </div>
                </div>

                <div class="form-group">
                    <label for="textAreaMessage" class="col-md-2 control-label">Message</label>

                    <div class="col-md-10">
                        <textarea class="form-control" rows="3" id="textAreaMessage" name="message"></textarea>
                        <span class="help-block">A longer block of help text that breaks onto a new line and may extend beyond one line.</span>
                    </div>
                </div>

                <div class="form-group">
                    <div class="col-md-10 col-md-offset-2">
                        <button type="button" class="btn btn-default">Cancel</button>
                        <button type="submit" class="btn btn-primary">Send</button>
                    </div>
                </div>
            </fieldset>
        </form>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Contact Page!'
    }
  }
}
</script>

<style>
</style>