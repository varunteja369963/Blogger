
<div class="container mt-3">
  <!-- The Modal -->
  <div class="modal fade" id="myModal3">
    <div class="modal-dialog">
      <div class="modal-content">
      
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">Table</h4>
          <button type="button" class="close" data-dismiss="modal">×</button>
        </div>
        
        <!-- Modal body -->
        <div class="modal-body modal-body3">
            <div class = "pop_up_table" id = "pop_up_table">
<div><label for = "no_of_rows" class = "row_label">rows</label></div>
<select id = "no_of_rows" class = "no_of_rows">
<?php
    for ($i=1; $i<=100; $i++)
    {
        ?>
            <option value="<?php echo $i;?>"><?php echo $i;?></option>
        <?php
    }
?>
</select>

<div id = "row_ack" class = "row_ack"></div>
<div class = "column_div"><label for = "no_of_columns" class = "column_label">columns</label></div>
<select id = "no_of_columns" class = "no_of_columns">
<?php
    for ($i=1; $i<=250; $i++)
    {
        ?>
            <option value="<?php echo $i;?>"><?php echo $i;?></option>
        <?php
    }
?>
</select>
<div id = "column_ack" class = "column_ack"></div>
<div>
</div>
</div>
    </div>
        <!-- Modal footer -->
        <div class="modal-footer">
          <div id = "modal3-footer">
          <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-success" id = "create_table">Save</button>
      </div>
        </div>  
      </div>
    </div>
  </div>
</div>